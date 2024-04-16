import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key :string]: any } []):
object   {

    const CarInfo = {

        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return CarInfo;
};


let answer = storeCarInfo('Honda','civic',{color:'black,'},{features:['Navigation', 'powerwindow']})

console.log(answer);