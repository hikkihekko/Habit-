import React, {useState} from "react";

const CreateHabitPage = ({Habit, setHabit})=> {

    const [value, setValue] = useState('')

    const SaveHabit= () => {

        // КОСТЫЛЬ!!!!!!
        let newId = 0;
        for (let i = 0; i < Habit.length; i++) {
                newId = Habit[i].id + 1;  
            }
        
        setHabit(
            [...Habit,{
                id:newId,
                title:value,
                combo:0,
                status: 'Active',
                lock: false,
            }]
        )
        setValue('')
    }

    function DeleteValue() {
        setValue('')
    }

    return(
        <div className="habit_conteyner">
                <div className="new_habit">
                    <input type="text" className="new_habit_txt" placeholder="Habits name"
                    value={value} onChange={(e) => setValue(e.target.value)}/>
                    <input type="button" value="CREATE" onClick={SaveHabit} />
                    <input type="button" value="DELATE" onClick={DeleteValue}/>
                </div>
        </div>
    );
}

export {CreateHabitPage};