import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Itinerario({ itin }) {
	return (
		<Timeline position='alternate'>
			{itin.map((it, i) => (
				<TimelineItem key={i}>
					<TimelineOppositeContent color='text.secondary'>{it.hour}</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot variant='outlined' />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>{it.direction}</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
