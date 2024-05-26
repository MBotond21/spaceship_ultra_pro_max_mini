import './index.css';

export function Slides() {
    var c = 1;
    setInterval(function () {
        try {
            if(c < 1){
                c = 1;
            }
            var inp = document.getElementById('radio' + c);
            (inp as HTMLInputElement).checked = true;
            c++;

            if (c > 4) {
                c = 1
            }
        } catch(e){
            c = 0;
        }

    }, 5000);


    return (
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide first">
                    <img src="https://wallpapercave.com/wp/wp7415167.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="https://wallpapercave.com/wp/wp7404538.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="https://wallpapercave.com/wp/wp6339347.jpg" alt="" />
                </div>
                <div className="slide">
                    <img src="https://wallpapercave.com/wp/wp7415179.jpg" alt="" />
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn-1"></div>
                    <div className="auto-btn-2"></div>
                    <div className="auto-btn-3"></div>
                    <div className="auto-btn-4"></div>
                </div>
            </div>

            <div className="navigation-mannual">
                <label className="mannual-btn"></label>
                <label className="mannual-btn"></label>
                <label className="mannual-btn"></label>
                <label className="mannual-btn"></label>
            </div>
        </div>
    );
}