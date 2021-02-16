import p5 from "p5"

const SketchService = data => {
    return {
        get: id => data[id],
        all: data,
        has: id => Object.keys(data).includes(id),
        ids: () => Object.keys(data),
    }
}

export default SketchService




