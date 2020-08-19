export class MockMatSnackBar {
  public open(): { onAction: () => void, subscribe: () => void } { return { onAction: () => {}, subscribe: () => {} }; }
}
