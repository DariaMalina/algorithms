enum Mode {
    Heat = 'heat',
    Freeze = 'freeze',
    Auto = 'auto',
    Fan = 'fan'
}

export function getDesiredTemp(tRoom: number, tDesired: number, config: string): number {
    switch (config) {
        case Mode.Heat: {
            if (tRoom < tDesired) {
                return tDesired;
            }
            return tRoom;
        }
        case Mode.Freeze: {
            if (tRoom > tDesired) {
                return tDesired;
            }
            return tRoom;
        }
        case Mode.Auto: {
            return tDesired;
        }
        case Mode.Fan: {
            return tRoom;
        }
        default: {
            return tRoom;
        }
    }
}