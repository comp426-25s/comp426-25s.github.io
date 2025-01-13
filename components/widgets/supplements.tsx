// @ts-ignore
import supplements from '../../course/supplements.yaml';

import { SupplementItem } from '@/course/models/models';
import SupplementListing from './supplement-listing';

export default function Supplements() {
    return (
        <div className="mt-2">
        {(supplements as unknown as SupplementItem[]).map(item => (
            <SupplementListing key={item.code} item={item} />
        ))}
        </div>
    );
}