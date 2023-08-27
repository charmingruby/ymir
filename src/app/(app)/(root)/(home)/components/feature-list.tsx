import { FeatureItem } from "./feature-item";

export function FeatureList() {
    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
        </div>
    )
}