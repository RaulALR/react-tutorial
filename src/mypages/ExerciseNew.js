import React from 'react'

export default class ExerciseNew extends React.Component {
    // constructor(props) {
    //     super(props)

    //     // this.handleOnClick = this.handleOnClick.bind(this)
    // }

    handleOnClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"/>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"/>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"/>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"/>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="btn btn-primary float-right">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}