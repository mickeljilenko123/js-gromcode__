export const callbackPrompt = {
    message: 'Tell me your number!!',
    showPrompt() {
        const current = prompt(`${this.message}`);
        console.log(current);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms)
    }
}
callbackPrompt.showDeferredPrompt(1000);