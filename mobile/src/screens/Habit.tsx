import { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs';
import clsx from 'clsx';

import { api } from '../lib/axios';
import { generateProgressPercentage } from '../utils/generete-progresse-percentage'

import { BackButton } from '../components/BackButton';
import { ProgressBar } from '../components/ProgressBar';
import { CheckBox } from '../components/Checkbox';
import { Loading } from '../components/Loading';
import { HabitsEmpty } from '../components/HabitsEmpty';

interface Params {
  date: string;
}

interface DayInfoProps{
  completedHabits: string[];
  possibleHabits: {
    id: string;
    title: string;
  }[];
}

export function Habit(){
  const [loading, setLoading] = useState(true);
  const [dayInfo, setDayInfo] = useState<DayInfoProps | null>(null)
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const route = useRoute();
  const { date } = route.params as Params;

  const parseDate = dayjs(date);
  const isDateInPast = parseDate.endOf('day').isBefore(new Date());
  const dayOfWeek = parseDate.format('dddd')
  const dayAnMonth = parseDate.format('DD/MM')

  const habitsProgress = dayInfo?.possibleHabits.length 
    ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length) 
    : 0;

  async function fetchHabits(){
    try {
      setLoading(true);

      const response = await api.get('/day', {params: {date}});
      setDayInfo(response.data);
      setCompletedHabits(response.data.completedHabits);

    } catch (error) {
      console.log(error)
      Alert.alert('Ops','Não foi possivel carregar as informações dos hábitos')
    }
    finally{
      setLoading(false);
    }
  }

  async function handleToggleHabit(habitId: string){
    try {
      await api.patch(`/habits/${habitId}/toggle`)
      if(completedHabits.includes(habitId)) {
        setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId))
      } else{
        setCompletedHabits(prevState => [...prevState,habitId]);
      }      
    } catch (error) {
      console.log(error);
      Alert.alert('Ops','Não foi possivel atualizar o status do habito')
    }

  }

  useEffect(() => {
    fetchHabits();
  },[])

  if(loading){
    return (
      <Loading/>
    );
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:100 }}
      >
        <BackButton/>

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAnMonth}
        </Text>

        <ProgressBar progress={habitsProgress}/>

        <View className={clsx("mt-6",{
          ["opacity-50"]:isDateInPast
        })}>
          {
            dayInfo?.possibleHabits ?
            dayInfo?.possibleHabits.map( habit => (
              <CheckBox
                key={habit.id}
                title={habit.title}
                checked={completedHabits.includes(habit.id)}
                disabled={isDateInPast}
                onPress={() => handleToggleHabit(habit.id)}
              />
            ))
            : <HabitsEmpty/>
          }
        </View>

        {
          isDateInPast && (
            <Text className="text-white mt-10 text-center">
              Você não pode editar habitos de datas passadas
            </Text>
          )
        }
      </ScrollView>
    </View>
  )
}