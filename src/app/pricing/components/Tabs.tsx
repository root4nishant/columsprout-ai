"use client";

import Heading from "@/components/custom/reusables/Heading";
import Section from "@/components/custom/reusables/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export default function PricingTabs() {
  return (
    <Section className=" mx-auto lg:py-20 md:py-0 py-24 lg:pt-32 font-secondary">
      <Heading text="Hire your Storefront Managers" />
      <Tabs defaultValue="tabi" className="w-full mx-auto  ">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8 h-full font-primary">
          <TabsTrigger
            value="tabi"
            className="data-[state=active]:bg-primary-dark data-[state=active]:text-white font-semibold lg:h-[45px] h-[32px]  lg:text-[24px] text-md"
          >
            Tabi AI
          </TabsTrigger>
          <TabsTrigger
            value="clio"
            className="data-[state=active]:bg-[#E5DED3] data-[state=active]:text-black font-semibold lg:h-[45px] h-[32px]  lg:text-[24px] text-md  "
          >
            Clio AI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tabi">
          <Card className="lg:w-1/2 mx-auto">
            <CardContent className="flex flex-col p-0">
              <div className="space-y-4 lg:p-6 p-4  ">
                <h3 className="lg:text-[24px] text-lg font-semibold">
                  Simplify Data
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transform your data effortlessly with high-quality tools for
                  seamless uploads, experiments, and exports.
                </p>
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span className="text-primary-dark">
                    Process upto 200 rows of data with 100 Free Sprout Tokens
                  </span>
                  <span className="text-xs">
                    *Sprout Tokens consumed based on data size and prompts used
                  </span>
                </div>
                <Button className="h-[38px] text-[18px] w-full bg-primary-dark font-semibold text-white hover:bg-black">
                  Try for Free →
                </Button>
              </div>
              <div className="space-y-4 bg-[#423EC7]/10lg:p-6 p-4">
                <h3 className="text-lg font-semibold">What&apos;s Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4  text-primary-dark" />
                    Directly upload Excel/CSV files
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4  text-primary-dark" />
                    Integrate with XML data feed
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4  text-primary-dark" />
                    High-quality prompt templates
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4  text-primary-dark" />
                    20+ free experiments
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4  text-primary-dark" />
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
              <CardContent className="lg:p-6 p-4">
                <div className="space-y-4">
                  <h3 className="lg:text-[24px] text-lg font-semibold">
                    Enable Support
                  </h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">STARTER</h4>
                    <p className="text-sm text-muted-foreground">
                      Handle customer conversations with tools for seamless
                      assistance and smooth operations.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full bg-[#E5DED3] hover:bg-black text-black hover:text-white lg:text-[18px] text-sm"
                  >
                    Request Pricing →
                  </Button>
                  <div className="space-y-4 ">
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
              <CardContent className="lg:p-6 p-4">
                <div className="space-y-4">
                  <h3 className="lg:text-[24px] text-lg font-semibold">
                    Scale Impact
                  </h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">ADVANCED</h4>
                    <p className="text-sm text-muted-foreground">
                      Equip your store with a smart concierge that streamlines
                      journeys and drives engagement.
                    </p>
                  </div>
                  <Button className="w-full bg-primary-dark lg:text-[18px] text-sm text-white hover:bg-[#8033FF]">
                    Request Pricing →
                  </Button>
                  <div className="space-y-4">
                    <h4 className="font-medium">What&apos;s Included</h4>
                    <p className="text-sm text-primary-dark font-medium">
                      Everything in Basic, plus:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4  text-primary-dark" />
                        Catalog knowledge base integration
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4  text-primary-dark" />
                        Full product search & recommendations
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4  text-primary-dark" />
                        Returns and refunding knowledge base
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4  text-primary-dark" />
                        Support for multiple languages
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4  text-primary-dark" />
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
    </Section>
  );
}
