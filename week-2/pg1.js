function mergeArr(...arrays){
    return [].concat(...arrays)
}
const res=mergeArr([1,2],[3,4],[5,6],[7,8])
console.log(res)