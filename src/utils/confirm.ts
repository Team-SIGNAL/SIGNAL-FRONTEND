export const confirmDialog = (message: string) => {
  return new Promise<void>((resolve, reject) => {
    const confirmation = window.confirm(message);
    if (confirmation) {
        resolve();
    } else {
        reject();
    }
});
};
