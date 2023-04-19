import React, { useState } from "react";
import {CreateHabitPage} from './CreateHabitPage';

const HabitList = () => {

    const [Habit, setHabit] = useState(
        [
            {
                id:1,
                title: 'make a cake',
                combo: 1,
                status: 'Active',
                lock: false,
            },
            {
                id:2,
                title: 'stading',
                combo: 12,
                status: 'Active',
                lock: false,
            },
            {
                id:3,
                title: 'read',
                combo: 30,
                status: 'Fixed',
                lock: true,
            },
        ]
    )


    const [value, setValue] = useState('')

    const [edit, setEdit] = useState(null)

    function DeleteHabit (id) {
        const newHabit = [...Habit].filter(item => item.id!==id)
        setHabit(newHabit)
    }

    function ChajeStatusLock (item) {
        item.lock = !item.lock
    }

    function ChajeText (item) {
        setEdit(item.id);
        setValue(item.title)
    }

    function SaveEdit (item){
        let newHabits = [...Habit].map(e =>{
            if(e === item){
                e.title = value;
            };
            return e;
        })
        setHabit(newHabits);
        setEdit(null);
    }

    function updateCombo (item){
        let newHabits = [...Habit].map(e =>{
            if(e === item){
                e.combo += 1;
            };
            return e;
        })
        setHabit(newHabits);
    }
    

    return(
        <div>
            <CreateHabitPage setHabit={setHabit} Habit={Habit}/>
            <div className="habit_conteyner">
                <div className="habit_list">
                    {
                        Habit.map(item => (
                            <div className="Habit_block" key={item.id}>
                                {edit === item.id || item.title === '' ? (
                                    <div>
                                        <input type="text" className="new_habit_txt" value={value} onChange={(e)=> setValue(e.target.value)}/>
                                        <button type="button" onClick={() => SaveEdit(item)}> SAVE </button>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="Habit_title">{item.title}</div>
                                        <div className={item.combo >= 30 ? "Habit_combo Habit_fixed" : "Habit_combo"}>
                                            COMBO: {item.combo}!
                                        </div>
                                    </div>
                                )}
                                <div className="buttons" >
                                    <button onClick={()=> DeleteHabit(item.id)}>DELETE</button>
                                    <button onClick={()=> ChajeStatusLock(item)}>LOCK</button>
                                    <button onClick={()=> ChajeText(item)}>EDIT</button>
                                    <button onClick={() => updateCombo(item)}>MADE</button>
                                    <button onClick={() => console.log(Habit)}>console</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export {HabitList};