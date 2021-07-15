import React from 'react';

class UserClass extends React.Component
{

    render(){
        const { name, years } = this.props; //dereferenciranje unutar klasa se radi preko this.props jer se name i years nalaze u propsu
        return(
            <div>
                <p> Pozdrav moje ime je {name} i imam {years} godina.</p>
                <p>
                    <input type="text" />
                </p>
            </div>
            
        );
    };
}
// u klasama koristimo this.props.name - za pozivanje propsa nam služi this metoda ali ne koristimo taj način
export default UserClass;