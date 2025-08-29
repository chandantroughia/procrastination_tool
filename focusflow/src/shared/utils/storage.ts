/**
 * Storage utility functions for FocusFlow
 */

export interface StorageData {
  [key: string]: any;
}

export interface StorageOptions {
  sync?: boolean;
  encrypt?: boolean;
  ttl?: number; // Time to live in milliseconds
}

export class StorageManager {
  private static instance: StorageManager;
  private encryptionKey: string | null = null;

  private constructor() {}

  static getInstance(): StorageManager {
    if (!StorageManager.instance) {
      StorageManager.instance = new StorageManager();
    }
    return StorageManager.instance;
  }

  setEncryptionKey(key: string): void {
    this.encryptionKey = key;
  }

  // Local Storage
  async setLocal(key: string, value: any, options: StorageOptions = {}): Promise<void> {
    try {
      let dataToStore = value;

      if (options.encrypt && this.encryptionKey) {
        dataToStore = this.encrypt(JSON.stringify(value));
      } else {
        dataToStore = JSON.stringify(value);
      }

      if (options.ttl) {
        const item = {
          value: dataToStore,
          timestamp: Date.now(),
          ttl: options.ttl,
        };
        localStorage.setItem(key, JSON.stringify(item));
      } else {
        localStorage.setItem(key, dataToStore);
      }
    } catch (error) {
      console.error('Error setting local storage:', error);
      throw error;
    }
  }

  async getLocal<T = any>(key: string, options: StorageOptions = {}): Promise<T | null> {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      let data: any;

      if (options.ttl) {
        const parsedItem = JSON.parse(item);
        if (Date.now() - parsedItem.timestamp > parsedItem.ttl) {
          localStorage.removeItem(key);
          return null;
        }
        data = parsedItem.value;
      } else {
        data = item;
      }

      if (options.encrypt && this.encryptionKey) {
        const decrypted = this.decrypt(data);
        return JSON.parse(decrypted);
      } else {
        return JSON.parse(data);
      }
    } catch (error) {
      console.error('Error getting local storage:', error);
      return null;
    }
  }

  async removeLocal(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing local storage:', error);
      throw error;
    }
  }

  async clearLocal(): Promise<void> {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing local storage:', error);
      throw error;
    }
  }

  // Sync Storage (Chrome Extension)
  async setSync(key: string, value: any, options: StorageOptions = {}): Promise<void> {
    try {
      if (!this.isExtension()) {
        throw new Error('Sync storage is only available in Chrome extension');
      }

      let dataToStore = value;

      if (options.encrypt && this.encryptionKey) {
        dataToStore = this.encrypt(JSON.stringify(value));
      } else {
        dataToStore = JSON.stringify(value);
      }

      const data: { [key: string]: any } = {};
      data[key] = dataToStore;

      await chrome.storage.sync.set(data);
    } catch (error) {
      console.error('Error setting sync storage:', error);
      throw error;
    }
  }

  async getSync<T = any>(key: string, options: StorageOptions = {}): Promise<T | null> {
    try {
      if (!this.isExtension()) {
        throw new Error('Sync storage is only available in Chrome extension');
      }

      const result = await chrome.storage.sync.get(key);
      const item = result[key];

      if (!item) return null;

      let data: any;

      if (options.encrypt && this.encryptionKey) {
        const decrypted = this.decrypt(item);
        return JSON.parse(decrypted);
      } else {
        return JSON.parse(item);
      }
    } catch (error) {
      console.error('Error getting sync storage:', error);
      return null;
    }
  }

  async removeSync(key: string): Promise<void> {
    try {
      if (!this.isExtension()) {
        throw new Error('Sync storage is only available in Chrome extension');
      }

      await chrome.storage.sync.remove(key);
    } catch (error) {
      console.error('Error removing sync storage:', error);
      throw error;
    }
  }

  async clearSync(): Promise<void> {
    try {
      if (!this.isExtension()) {
        throw new Error('Sync storage is only available in Chrome extension');
      }

      await chrome.storage.sync.clear();
    } catch (error) {
      console.error('Error clearing sync storage:', error);
      throw error;
    }
  }

  // Universal storage (automatically chooses local or sync)
  async set(key: string, value: any, options: StorageOptions = {}): Promise<void> {
    if (options.sync && this.isExtension()) {
      return this.setSync(key, value, options);
    } else {
      return this.setLocal(key, value, options);
    }
  }

  async get<T = any>(key: string, options: StorageOptions = {}): Promise<T | null> {
    if (options.sync && this.isExtension()) {
      return this.getSync<T>(key, options);
    } else {
      return this.getLocal<T>(key, options);
    }
  }

  async remove(key: string, options: StorageOptions = {}): Promise<void> {
    if (options.sync && this.isExtension()) {
      return this.removeSync(key);
    } else {
      return this.removeLocal(key);
    }
  }

  // Utility methods
  private isExtension(): boolean {
    return typeof chrome !== 'undefined' && chrome.storage !== undefined;
  }

  private encrypt(text: string): string {
    // Simple encryption - in production, use a proper encryption library
    if (!this.encryptionKey) {
      throw new Error('Encryption key not set');
    }
    return btoa(text + this.encryptionKey);
  }

  private decrypt(encryptedText: string): string {
    // Simple decryption - in production, use a proper encryption library
    if (!this.encryptionKey) {
      throw new Error('Encryption key not set');
    }
    const decoded = atob(encryptedText);
    return decoded.slice(0, -this.encryptionKey.length);
  }

  // Migration helpers
  async migrateData(fromKey: string, toKey: string, options: StorageOptions = {}): Promise<void> {
    const data = await this.get(fromKey, options);
    if (data) {
      await this.set(toKey, data, options);
      await this.remove(fromKey, options);
    }
  }

  async exportData(): Promise<StorageData> {
    const data: StorageData = {};
    
    // Export local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          data[`local_${key}`] = await this.getLocal(key);
        } catch (error) {
          console.warn(`Failed to export local storage key: ${key}`, error);
        }
      }
    }

    // Export sync storage if available
    if (this.isExtension()) {
      try {
        const syncData = await chrome.storage.sync.get(null);
        Object.keys(syncData).forEach(key => {
          data[`sync_${key}`] = syncData[key];
        });
      } catch (error) {
        console.warn('Failed to export sync storage', error);
      }
    }

    return data;
  }

  async importData(data: StorageData): Promise<void> {
    for (const [key, value] of Object.entries(data)) {
      try {
        if (key.startsWith('local_')) {
          const localKey = key.replace('local_', '');
          await this.setLocal(localKey, value);
        } else if (key.startsWith('sync_')) {
          const syncKey = key.replace('sync_', '');
          await this.setSync(syncKey, value);
        }
      } catch (error) {
        console.warn(`Failed to import storage key: ${key}`, error);
      }
    }
  }
}

// Export singleton instance
export const storage = StorageManager.getInstance();


