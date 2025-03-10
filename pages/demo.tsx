"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";

import { Spotlight } from "@/components/ui/spotlight";



export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[700px] bg-black/[0.96] relative overflow-hidden">
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fromColor="white"        // More visible starting color
        viaColor="gray-200"      // Middle gradient
        toColor="gray-100"       // End gradient
        initialOpacity={0.3}     // Visible even when not hovered
        size={300}              // Increase size if needed
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            MacBook Air
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
          Sky blue color.
          Skly  high performance with m4.
          
          </p>

          <img src="https://www.apple.com/in/ipad-air/images/overview/apple-intelligence/imagewand__duacmea7cw02_large_2x.png" alt="image" className="w-full h-full object-cover" />
          


        </div>

        


        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
