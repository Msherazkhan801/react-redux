/* eslint-disable no-unused-vars */

type VoidFunc = () => void

declare module 'use-sync-external-store' {
  export function useSyncExternalStore<T>(
    subscribe: (VoidFunc) => VoidFunc,
    getSnapshot: () => T
  ): T
}

declare module 'use-sync-external-store/extra' {
  export function useSyncExternalStoreExtra<Snapshot, Selection>(
    subscribe: (VoidFunc) => VoidFunc,
    getSnapshot: () => Snapshot,
    selector: (snapshot: Snapshot) => Selection,
    isEqual?: (a: Selection, b: Selection) => boolean
  ): Selection
}
