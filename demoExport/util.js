/*export function sum(x,y){
    return x+y;
}

export const firstName='AJ Skill'*/

//can remove export by specifying as below

function sum(x,y){
    return x+y;
}

const firstName='AJ Skill'

const lastName='Development'

export {sum,firstName,lastName} //export at once

//export default lastName //export default