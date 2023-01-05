import { StyleSheet, View } from 'react-native'
import RoundedButton from '../components/RoundedButton'

type Props = {
  onChangeTime: React.Dispatch<React.SetStateAction<number>>
}

const Timing: React.FC<Props> = ({ onChangeTime }) => {

  const timings: number[] = [ 5, 10, 20 ]


  return (
    <View style={styles.timingButton}>
      {timings.map((timing, index) =>
        <RoundedButton
          key={index}
          size={50}
          title={timing.toString()}
          onPress={() => onChangeTime(timing)}
        />
      )}
    </View>
  )
}

export default Timing

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})