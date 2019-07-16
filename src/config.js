<<<<<<< HEAD
let host = 'http://localhost:3001'

if (process.env.REACT_APP_TYPE === "local") {
    host = process.env.REACT_APP_LOCAL_URL
} else if (process.env.REACT_APP_TYPE === "aws") {
    host = process.env.REACT_APP_AWS_URL
} else if (process.env.REACT_APP_TYPE === "aws_dev") {
    host = process.env.REACT_APP_DEV_URL
} else;

export default host
=======
let host = process.env.REACT_APP_API_URL;
if(process.env.REACT_APP_BUILD === "true" || process.env.REACT_APP_BUILD === true) {
	host = process.env.REACT_APP_API_URL;
} else if(process.env.REACT_APP_DEV === "true" || process.env.REACT_APP_DEV === true) {
	host = process.env.REACT_APP_DEV_API_URL;
} else if(process.env.REACT_APP_LOCAL === "true" || process.env.REACT_APP_LOCAL === true) {
	host = process.env.REACT_APP_LOCAL_API_URL;
}else;
// testing //
export default host;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
