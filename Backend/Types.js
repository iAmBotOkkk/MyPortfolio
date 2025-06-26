const zod = require("zod");


const input = zod.object({
   Name:zod.string(),
   Email:zod.string(),
   Message:zod.string()

})
module.exports = {
    input
}