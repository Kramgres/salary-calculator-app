import React, {FC} from 'react'

import styles from './SalaryCalculator.module.scss'

const SalaryCalculator: FC = () => {
  return (
    <div className={styles.calculator}>
      <h1 className={styles.calculator__title}>Калькулятор для рассчёта заработной платы</h1>
    </div>
  )
}

export default SalaryCalculator
