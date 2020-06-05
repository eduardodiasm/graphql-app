class ErrorTrackingExtension {
    logError({ code, message }, context) {
        if (context.variables) {
            if (context.variables.password) {
                context.variables.password = "********"
            }
        }
        console.log(`ERROR << ${code} | ${message} >> SENDING VARIABLES << ${JSON.stringify(context.variables)} >>`)
    }
    willSendResponse(o) {
        const { context, graphqlResponse } = o
		if (graphqlResponse.errors) {
			graphqlResponse.errors.forEach(error => {
				this.logError(error, context)
				if (error.code == "INTERNAL_SERVER_ERROR") {
                    /* dont send internal server error message to client */
					error.message = ""
				}
			})
		}

        return o
    }
}

module.exports = [
    () => new ErrorTrackingExtension()
]