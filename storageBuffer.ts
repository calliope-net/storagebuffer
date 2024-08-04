
namespace storage {

    const key = "i2"
    let i2 = storage.getValueInt(key)

    //% group="Buffer in Flash schreiben und lesen"
    //% block="Buffer %buffer in Slot 2 speichern (UInt32LE)" weight=2
    export function putBuffer(buffer: Buffer): void {
        let value = buffer.getNumber(NumberFormat.UInt32LE, 0)
        if (i2 != value) { // nur bei Änderung in Flash schreiben
            i2 = value
            storage.putValueInt(key, value)
        }
    }

    //% group="Buffer in Flash schreiben und lesen"
    //% block="Buffer aus Slot 2 lesen (UInt32LE)" weight=1
    export function getBuffer(): Buffer {
        let buffer = Buffer.create(4)
        buffer.setNumber(NumberFormat.UInt32LE, 0, storage.getValueInt(key))
        return buffer
    }

}