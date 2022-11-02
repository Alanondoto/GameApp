import {Field, reduxForm} from 'redux-form';

const MainMenu = (props) => {

    let  onSettingsChange = (values) => {
        props.play(values.numberItemsBody, values.numberCountBody)
      };

    let incrChange = (values) => {
        props.incr(values.gameModeBody)
    };  

    let decrChange = (values) => {
        props.decr(values.gameModeBody)
    }

    const SettingsForm = (props) => {
    
        return (
                <form onSubmit={props.handleSubmit}>
                  <div>
                    <p>Кол-во предметов</p>
                  </div>
                  <div>
                    <Field component={'input'} type='number' name='numberItemsBody' placeholder='Enter items' />
                  </div>
                  <div>
                    <p>Значения</p>
                  </div>
                  <div>
                    <Field component={'input'} type='number' name='numberCountBody' placeholder='Enter count' />
                  </div>
                  <div>
                    <button>Играть</button>
                  </div>
                </form>
        )
    }

    const SettingsReduxForm = reduxForm({form: 'MenuSettingsForm'})(SettingsForm)

    return(
        <div>
            <h1>Zdarova</h1>
            <SettingsReduxForm onSubmit={onSettingsChange}/>
            <div>
                <button onClick={incrChange}>По возрастанию</button>
            </div>
            <div>
                <button onClick={decrChange}>По убыванию</button>
            </div>
        </div>
    )
}

export default MainMenu