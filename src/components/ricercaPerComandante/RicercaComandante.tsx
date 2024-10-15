import { motion } from 'framer-motion';
import { Col, Row } from 'react-bootstrap';
import { SubmitHandler } from 'react-hook-form';

import { MagicFormSchema } from '../../schemas/MagicFormSchema';
import { MagicFormSchemaType } from '../../schemas/EDHtypes';
import Button from '../../ui/components/Button/Button';
import Form from '../../ui/components/Form/Form';
import Input from '../../ui/components/Input/Input';
import Table from '../../ui/components/Table/Table';


import RicercaTotale from './RicercaTotale';
import useComandanteTable from './useComandanteTable';

interface FormProps {
  onSubmit: SubmitHandler<MagicFormSchemaType>;
  searchResults: { nomeComandante: string; coloriComandante: string[]; arkideck: string }[];
}

export default function RicercaPerComandante({ onSubmit, searchResults }: FormProps) {
  const { table } = useComandanteTable();

  return (
    <>
      <Form<MagicFormSchemaType, typeof MagicFormSchema>
        onSubmit={onSubmit}
        schema={MagicFormSchema}
        id="dati-richiesta-form"
        className="mt-4"
      >
        {({ register, formState, getValues }) => (
          <>
            <Col lg={6}>
              <p>Inserisci un nome o una lettera con cui poter cercare la carta</p>
              <Input
                {...register('comandante')}
                id="Commander"
                label="Commander"
                required
                error={formState.errors.comandante?.message}
                touched={formState.touchedFields.comandante}
              />
              <Button
                type="button"
                disabled={!formState.isValid}
                onClick={() => {
                  onSubmit({ comandante: getValues('comandante') });
                }}
              >
                Cerca
              </Button>
            </Col>
          </>
        )}
      </Form>
      <Row>
        <Col lg={6}>
          {searchResults.length > 0 ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -30 }} // Inizia con scala ridotta, opacità zero e posizione verticale spostata verso l'alto
              animate={{ scale: 1, opacity: 1, y: 0 }} // Scala normale, opacità piena e posizione verticale normale quando l'animazione è completa
              transition={{ duration: 0.5, ease: 'easeOut' }} // Durata e tipo di transizione
              className="mt-4"
            >
              <h2 className="text-center">Comandanti trovati</h2>

              <Table caption="Riepilogo indagini" instance={table} striped />
            </motion.div>
          ) : (
            <div className="text-center"></div>
          )}
        </Col>
        <Col lg={6}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -30 }} // Inizia con scala ridotta, opacità zero e posizione verticale spostata verso l'alto
            animate={{ scale: 1, opacity: 1, y: 0 }} // Scala normale, opacità piena e posizione verticale normale quando l'animazione è completa
            transition={{ duration: 0.5, ease: 'easeOut' }} // Durata e tipo di transizione
            className="mt-4"
          >
            <h2 className="text-center">Lista totale</h2>
            <RicercaTotale />
          </motion.div>
        </Col>
      </Row>
    </>
  );
}
