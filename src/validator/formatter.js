const trim1 =function(){

    const d = "        Hello       ";
    console.log(d.trim())
    }
    const lower =function(){

        const d = "CHANGE LETTER IN LOWER CASE";
        console.log(d.toLowerCase())
        }
        const upper =function(){

            const d = "change letter in upper case";
            console.log(d.toUpperCase())
            }

    module.exports.trim1 =trim1
    module.exports.lower = lower
    module.exports.upper = upper