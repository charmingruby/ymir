import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";
import { CycleElement } from "./cycle-element";

export function Cycle() {
    return (
        <div className="mt-12">
            {/* Top Cycle */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <CycleElement />
                    <div className="flex justify-center items-center">
                        <ArrowRight className="hidden md:block text-primary-300" />
                        <ArrowDown className="block md:hidden text-primary-300" />
                    </div>
                    <CycleElement />
                </div>
            </div>

            {/* Mid Cycle */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 text-primary-100">
                <div className="hidden md:flex items-center justify-center">
                    <ArrowUp />
                </div>
                <div className="flex items-center justify-center">
                    <ArrowDown />
                </div>
            </div>

            {/* Bottom Cycle */}
            <div className="mt-8 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <CycleElement />
                    <div className="flex justify-center items-center text-primary-100">
                        <ArrowRight className="hidden md:block text-primary-300" />
                        <ArrowDown className="block md:hidden text-primary-300" />
                    </div>
                    <CycleElement />
                </div>
            </div>
        </div>
    )
}