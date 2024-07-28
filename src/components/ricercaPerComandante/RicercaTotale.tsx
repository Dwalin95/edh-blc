import { motion } from 'framer-motion';

import Table from '../../ui/components/Table/Table';

import useRicecrcaTotaleTable from './useRicercaTotaleTable';

export default function RicercaTotale() {
  const { table, data } = useRicecrcaTotaleTable();

  return (
    <>
      {data && data.length > 0 && (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Table caption="Riepilogo Comandanti" instance={table} striped />
        </motion.div>
      )}
    </>
  );
}
