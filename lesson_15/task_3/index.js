// input: string
// output: obj

const createLogger = () => {
    let warn = '';
    let error = '';
    let log = '';
    return {
        warn(warn1) {
            return warn += warn1;
        },
        error(error1) {
            return error += error1;
        },
        log(log1) {
            return log += log1;
        },
    }
}
const warn1 = createLogger();
warn1.warn('предупреждение об ошибке');
const error1 = createLogger();
error1.error('ошибка');
const log1 = createLogger();
log1.log('обычное сообщение');


{ message: [сохраненное сообщение], dateTime: [время регистрации сообщения(используем new Date() - текущее время)], type: [тип записи] }