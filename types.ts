export interface CurrencyRate { id: string; name: string; code: string; symbol: string; buy: number; sell: number; lastUpdated: string; change: 'up' | 'down' | 'neutral'; flag: string; category: 'local' | 'transfer' | 'toman' | 'global'; }
export interface MetalRate { id: string; name: string; unit: string; price: number; lastUpdated: string; change: 'up' | 'down' | 'neutral'; icon?: string; }
export interface User { id: string; name: string; email: string; role: 'admin' | 'user' | 'developer'; status: 'pending' | 'approved'; createdAt: string; }
export interface AppConfig { appName: string; primaryColor: string; fontFamily: string; translations: any; sections: any; }
