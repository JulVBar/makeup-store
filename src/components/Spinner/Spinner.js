import './spinner.scss';

const Spinner = () => {
    return (
        <section class="container">
            <div class="tittle"><h2>Loading</h2></div>
            <div class="square-container">
                <div class="square square1">&nbsp;</div>
                <div class="square square2">&nbsp;</div>
                <div class="square square3">&nbsp;</div>
                <div class="square square4">&nbsp;</div>
                <div class="square square5">&nbsp;</div>
                
            </div>
        </section>
    )
}

export default Spinner;