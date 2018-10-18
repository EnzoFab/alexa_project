module.exports = {
    isSlotValid: (intent, slotName) => intent && intent.slots && intent.slots[slotName] && intent.slots[slotName].value
        && intent.slots[slotName].value.trim() !== ''
}