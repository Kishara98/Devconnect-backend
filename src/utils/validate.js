


async function validateSignUpRequestFields(reqBody) {
    try {
        const { userName, skills, gitHubLink, bio, password } = reqBody;
    if(!userName) throw new Error("Username must be defined");
    if (!Array.isArray(skills)) {
        throw new Error("Skills must be an array");
      }
    if(!gitHubLink) throw new Error("Username must be defined");
    if(!bio) throw new Error("Bio must be defined");
    if(!password) throw new Error("Password must be defined");
    } catch (error) {
        console.error(error)
    }
} 
async function validateLoginRequestFields(reqBody) {
    try {
        const { userName, password } = reqBody;
    if(!userName) throw new Error("Username must be defined");
    if(!password) throw new Error("Password must be defined");
    } catch (error) {
        console.error(error)
    }
} 

module.exports = {
    validateSignUpRequestFields,
    validateLoginRequestFields
}