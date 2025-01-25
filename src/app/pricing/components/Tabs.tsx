"use client";

import Heading from "@/components/custom/reusables/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export default function PricingTabs() {
  return (
    <div className="container mx-auto px-4 lg:py-32 py-20">
      <Heading text="Hire your Storefront Managers" />
      <Tabs defaultValue="tabi" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
          <TabsTrigger
            value="tabi"
            className="data-[state=active]:bg-[#9747FF] data-[state=active]:text-white"
          >
            Tabi AI
          </TabsTrigger>
          <TabsTrigger
            value="clio"
            className="data-[state=active]:bg-[#E5DED3] data-[state=active]:text-black"
          >
            Clio AI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tabi">
          <Card>
            <CardContent className="grid md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Simplify Data</h3>
                <p className="text-sm text-muted-foreground">
                  Transform your data effortlessly with high-quality tools for
                  seamless uploads, experiments, and exports.
                </p>
                <Button className="w-full bg-[#9747FF] hover:bg-[#8033FF]">
                  Try for Free →
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What&apos;s Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#9747FF]" />
                    Directly upload Excel/CSV files
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#9747FF]" />
                    Integrate with XML data feed
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#9747FF]" />
                    High-quality prompt templates
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#9747FF]" />
                    20+ free experiments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#9747FF]" />
                    One-click exports
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clio">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Enable Support</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">STARTER</h4>
                    <p className="text-sm text-muted-foreground">
                      Handle customer conversations with tools for seamless
                      assistance and smooth operations.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#E5DED3] text-black"
                  >
                    Request Pricing →
                  </Button>
                  <div className="space-y-4">
                    <h4 className="font-medium">What&apos;s Included</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" />
                        Live Chat
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" />
                        Comprehensive cases for support
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" />
                        Unified inbox for fast effort
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4" />
                        3-team seats
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Scale Impact</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">ADVANCED</h4>
                    <p className="text-sm text-muted-foreground">
                      Equip your store with a smart concierge that streamlines
                      journeys and drives engagement.
                    </p>
                  </div>
                  <Button className="w-full bg-[#9747FF] hover:bg-[#8033FF]">
                    Request Pricing →
                  </Button>
                  <div className="space-y-4">
                    <h4 className="font-medium">What&apos;s Included</h4>
                    <p className="text-sm text-purple-600 font-medium">
                      Everything in Basic, plus:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#9747FF]" />
                        Catalog knowledge base integration
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#9747FF]" />
                        Full product search & recommendations
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#9747FF]" />
                        Returns and refunding knowledge base
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#9747FF]" />
                        Support for multiple languages
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#9747FF]" />
                        SLA and premium support
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
