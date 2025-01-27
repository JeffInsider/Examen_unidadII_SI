import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ExplicacionScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Información sobre el Plan de Amortización</Text>

      <Text style={styles.title}>1. Cálculo del Balance Deudor de Seguros de Vida (SVSD)</Text>
      <Text style={styles.description}>
        SVSD para un mes específico = Saldo de capital del mes anterior * 0.15% (mínimo $2).
      </Text>

      <Text style={styles.title}>2. Cálculo del Interés de Mora</Text>
      <Text style={styles.description}>
        Interés de mora = (Principal atrasado) x (tasa de interés anual * 50% / 360) x (Número de días de atraso).
      </Text>

      <Text style={styles.title}>3. Cálculo de la Tasa de Interés Anual</Text>
      <Text style={styles.description}>
        La tasa de interés anual se calcula en base al interés aplicado sobre el principal durante el año. 
        Por ejemplo, si la tasa de interés anual es del 16%, se aplica este porcentaje sobre el principal.
      </Text>

      <Text style={styles.title}>4. Porcentajes de Comisión</Text>
      <Text style={styles.description}>
        Los porcentajes de comisión se aplican al monto de cada cuota o al saldo pendiente. Estos porcentajes
        pueden variar según el acuerdo con la entidad financiera.
      </Text>

      <Text style={styles.title}>5. Cálculo de la Cuota Mensual Caducada</Text>
      <Text style={styles.description}>
        La cuota mensual caducada se calcula como la cuota del mes que no ha sido pagada, sumando cualquier
        interés de mora acumulado hasta la fecha de pago.
      </Text>

      <Text style={styles.title}>6. Cálculo de la Comisión Total</Text>
      <Text style={styles.description}>
        Comisión total = Cuota mensual * porcentaje de comisión.
      </Text>

      <Text style={styles.title}>7. Cálculo del Pago Total (Cuota + Comisión)</Text>
      <Text style={styles.description}>
        Pago total = Cuota mensual + Comisión total.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ExplicacionScreen;

