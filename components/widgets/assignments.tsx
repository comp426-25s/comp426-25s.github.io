// @ts-ignore
import assignments from '../../course/assignments.yaml';

import { AssignmentItem } from '@/course/models/models';
import AssignmentListing from './assignment-listing';

export default function Assignments() {
    return (
        <div className="mt-2">
        {(assignments as unknown as AssignmentItem[]).map(item => (
            <AssignmentListing key={item.code} item={item} />
        ))}
        </div>
    );
}