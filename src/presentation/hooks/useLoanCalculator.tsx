import { useEffect, useState } from 'react';
<<<<<<< HEAD

// Hook para calcular los pagos y otros valores
export const useLoanCalculator = (
  amount: number,
  annualInterestRate: number,
  months: number,
  startDate: string,
  commisionPercentage: number,
  isSubmit: boolean,
) => {
  const [calculation, setCalculation] = useState<{
    monthlyPayment: number;
    commision: number;
    totalPayment: number;
    svsd: number;
    defaultInterest: number;
=======
import {Text, View} from 'react-native';

export const useLoanCalculator = (
  amount: number, 
  annualInterestRate: number,
  months: number,
  startDate: string,
  //se cambio el tipo de dato de startDate
  //startDate: Date,
  commisionPercentage: number,
  //dependencia para que se ejecute el useEffect
  isSubmit: boolean,
) => {

  //esto es para que se muestre el calculo
  //se envuelve con <> para que sepa que es un objeto
  const [calculation, setCalculation] = useState<{
    monthlyPayment: number,
    commision: number,
    totalPayment: number,
    //se pone null para que no se muestre nada si no se ha hecho el calculo
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
  } | null>(null);

  const [isCalculation, setIsCalculation] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    if (!isSubmit) return;

    setIsCalculation(true);

    // Calcular la tasa de interés mensual
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // Calcular la cuota nivelada
=======
    //si no se ha enviado el formulario no se hace nada//esto es para que no se este ejecutando
    if (!isSubmit) return;

    setIsCalculation(true);
    //calcular la tasa de interes mensual
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    //calcular la cuota nivelada
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
    const numer = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
    const denom = Math.pow(1 + monthlyInterestRate, months) - 1;
    const monthlyPayment = amount * (numer / denom);

<<<<<<< HEAD
    // Calcular la comisión
    const commision = amount * (commisionPercentage / 100);

    // Calcular el total a pagar
    const totalPayment = monthlyPayment * months + commision;

    // Calcular el SVSD
    const svsd = amount * 0.0015; // 0.15% del saldo principal

    // Calcular el interés moratorio
    // Supongamos que el principal vencido es el monto del préstamo
    // y que los días en mora son 31 días como en el ejemplo dado
    const overduePrincipal = amount; // Por simplificación
    const daysOverdue = 31;
    const defaultInterest = (overduePrincipal * (annualInterestRate * 0.5 / 360)) * daysOverdue;

=======
    //calcular la comision
    const commision = amount * (commisionPercentage / 100);

    //calcular el total a pagar
    const totalPayment = monthlyPayment * months + commision;

    // Mostrar los resultados en la consola
    //console.log('Monto del préstamo:', amount);
    //console.log('Tasa de interés anual:', annualInterestRate);
    //console.log('Plazo en meses:', months);
    //console.log('Fecha de inicio del préstamo:', startDate);
    //console.log('Porcentaje de comisión:', commisionPercentage);
    console.log('Cuota mensual calculada:', monthlyPayment);
    console.log('Comisión total:', commision);
    console.log('Pago total (cuota + comisión):', totalPayment);

    //actualizar el estado
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
    setCalculation({
      monthlyPayment,
      commision,
      totalPayment,
<<<<<<< HEAD
      svsd,
      defaultInterest,
    });

    setIsCalculation(false);
  }, [amount, annualInterestRate, months, startDate, commisionPercentage, isSubmit]);

  return {
    calculation,
    isCalculation,
=======
    });

    //se pone false para que no se este ejecutando
    setIsCalculation(false);

  }, [amount, annualInterestRate, months, startDate, commisionPercentage, isSubmit]);

  
  return {
    //properties
    calculation,
    isCalculation,
    //methods
    
>>>>>>> d5b64266b100387d5de290d2cc6335245f902be3
  };
};

