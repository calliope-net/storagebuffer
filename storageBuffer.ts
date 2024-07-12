
namespace storage{

    //% block
    export function putBuffer(buffer: Buffer): void {
        // let managedValue = Math.floor(value * 100);
        // storage.putValueInt(storagesInt[key], managedValue);
        storage.putValueInt("i2", buffer.getNumber(NumberFormat.UInt32LE, 0))
    }

    //% block
    export function getBuffer(): Buffer {
        // let value = getValueInt(storagesInt[key]);
        // return value / 100;
        let buffer = Buffer.create(4)
        buffer.setNumber(NumberFormat.UInt32LE, 0, storage.getValueInt("i2"))
        return buffer
    }

}