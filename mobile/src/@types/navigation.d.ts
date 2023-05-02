export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Dashboard: undefined;
      Order: {
        order_id: string;
        table:  number | string;
        name?: string;
      };
      FinishOrder: {
        order_id: string;
        table:  number | string;
        name?: string;
      };
    }
  }
}