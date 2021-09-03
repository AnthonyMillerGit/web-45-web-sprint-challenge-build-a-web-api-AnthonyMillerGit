// add middlewares here related to projects
const Project = require('./projects-model')

async function validateProjectId(req, res, next) {
    try {
        const project = await Project.get(req.params.id)
        if (!project) {
            next({
                status: 404,
                message: 'not found'
            })
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        res.status(500).json({
            message: "project not found"
        })
    }
}



module.exports = {
    validateProjectId,
}