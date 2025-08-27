"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)

export { gsap, SplitText, useGSAP };