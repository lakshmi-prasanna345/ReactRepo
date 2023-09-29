const Quiz = () => {
    return (
        <div>
            <center>
                <h1>Quiz App</h1>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Default radio
                        </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Default checked radio
                        </label>
                </div>
                <button className="btn btn-primary mt-5">next</button>
            </center>
        </div>
    )
}
export default Quiz;