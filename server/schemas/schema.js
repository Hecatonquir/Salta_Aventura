// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import Paquete from './Paquete';
import Carousel from './Carousel';
import Itinerario from './Itinerario';
import Contacto from './Contacto';
import Faqe from './FAQE';
import Faqp from './FAQP';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
 	name: 'default',
 	types: schemaTypes.concat([
		Paquete,
		Itinerario,
		Carousel,
		Contacto,
		Faqe,
		Faqp,
	]),
});
