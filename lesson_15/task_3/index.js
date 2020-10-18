// input: string
// output: obj

const createLogger = () => {

    let arr = [];

    return {
        warn(message) {
            return arr.push({ message, dataTime: new Date(), type: 'warn' })
        },
        error(message) {
            return arr.push({ message, dataTime: new Date(), type: 'error' })
        },
        log(message) {
            return arr.push({ message, dataTime: new Date(), type: 'log' })
        },
        getRecords(type) {
            return type ? arr.filter(e => e.type === type)
                .sort((a, b) => { a.dataTime - b.dataTime }) : arr;
        }
    }
}
const logger = createLogger();
logger.warn('User logged in');
logger.error('User try to restricted page');
logger.log('User logged out');
logger.getRecords();
console.log(logger.getRecords('log'));
logger.getRecords('error');
logger.getRecords('warn');