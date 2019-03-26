export interface Store {
    hash: string;
    document_map: Map<string, string>;
}
declare const dispatch: import("ipreact").DispatchAction<Store>, connect: import("ipreact").Connect<any>, getState: () => Store;
export { dispatch, connect, getState };
