---
title: 'Neural interfaces for vision: Is there light at the end of the tunnel?'
tags: ["stimulation", "deepdive" ]
published: true
featuredImage: /images/vision-implants.jpg
date: '2020-08-25'
---


*Current retinal implants deliver just enough vision to enable the blind
to see bright lights, high-contrast edges, and moving objects.
Considering their enormous potential, visual prosthetics have lagged
behind other BCIs, because we still don't fully understand what happens
between the retina and the cortex. Will the new generation of visual
interface technology now in trials — optogenetics, cortical implants,
and 'retinal coding' — finally allow the blind to see better?*

![](../src/images/vision-implants.jpg)
<small class="caption">Recipients of current visual cortical implants see little more than points or bars of light. Photo by <a href="https://unsplash.com/@asimcmr">Asim Z Kodappana</a></small>


Vision is by far the highest-bandwidth and fastest information input
system into the human brain. The bandwidth of the human retina is
approximately
[8960](https://www.newscientist.com/article/dn9633-calculating-the-speed-of-sight)
kilobits per second. The visual system aggregates this information at
multiple levels before it is perceived, acted on, stored, or forgotten.
The first level of complex processing occurs at the retina, where 100
million photoreceptors perceive light and pass on a high-fidelity
representation to the optic nerve. Since the optic nerve has only 1
million fibers, it is evident that information from the retina is
resampled and compressed both spatially and temporally by the local
retinal neuronal network.

Our understanding of the retinal encoding process is incomplete at best.
The encoding of visual information grows even more complex along the
relay from the optic nerve to the visual cortex. This is why most
attempts at visual neuroprosthetics aim to activate cells as close as
possible to the start of the system — at the retina.

In 2020, there is a single retinal implant approved by the United States
FDA, and two approved by the European regulator. These implants allow
people to detect light sources such as airways and lamps, follow
high-contrast edges, recognize moving objects. Some implant recipients
can recognize large letters at close range, but this level of visual
acuity falls far short of the 'legally blind' threshold.

It is precisely because the visual system is so advanced that we haven't
yet been able to mimic it. Researchers have tried neural stimulation at
various levels of the visual pathway

#Neuroprosthetics and the visual pathway


###Retina

Most visual neural interfaces operate at the level of the retina, bypassing photoreceptors that are damaged in certain
[hereditary](https://en.wikipedia.org/wiki/Retinitis_pigmentosa) or
[age-related](https://en.wikipedia.org/wiki/Macular_degeneration) forms
of blindness. These require that the circuitry downstream of the retina
up to the visual cortex be fully developed and intact. Since
much of the visual circuitry in the brain is developed in infancy, in
conjunction with a seeing eye, these implants apply to forms of
blindness that are acquired in adulthood.

At least [6 retinal implant](https://eyewiki.aao.org/Retina_Prosthesis)
designs have passed preclinical testing, and are currently or will soon
be in clinical testing. Depending on their design, these implants are
placed within the layers of the retina or just outside it. They
typically consist of a flat microelectrode array (16-60 electrodes) that
simulates the bipolar and/or ganglion cells of the retina, bypassing the
degenerated photoreceptor layer. Except for the [IMS
Alpha](https://www.sciencedirect.com/science/article/pii/S0042698915000784),
which uses internal, light-sensitive photodiodes, retinal implants
consists of a camera mounted on eyeglasses and a visual processing unit.
The external components capture and process images, then activate the
implanted microelectrodes, which in turn stimulate the retina. This
design allows developers to program the pattern of stimulation and
potentially improve implant function through [software
upgrades](https://www.extremetech.com/extreme/163308-a-taste-of-the-future-the-usas-first-bionic-eye-will-be-receive-a-software-update-to-enable-color-vision-increased-resolution).

[Second Sight](https://secondsight.com/)'s Argus II is the only implant
approved for use by the FDA and has over 350 global users. The 2013
approval by FDA was a [humanitarian device
exemption](https://www.accessdata.fda.gov/cdrh_docs/pdf11/H110002B.pdf)
that provides a 'reasonable assurance of safety and probable benefit'
but stops short of supporting any claims that the device is effective.
In the manufacturer's words, 'The Argus II is *authorized by Federal
(U.S.) law to provide electrical stimulation of the retina to induce
visual perception in blind patients with severe to profound retinitis
pigmentosa and bare light or no light perception in both eyes. The
effectiveness of this device for this use has not been demonstrated.'*

This is a far cry from the language used in the [FDA
approvals](https://www.fda.gov/medical-devices/recently-approved-devices/med-el-cochlear-implant-system-p000025s104)
of cochlear implants ([neural interfaces for
hearing](https://from-the-interface/neural-interface-cochlear-implant/)),
which state unambiguously that these devices improve speech
understanding in noise, sound localization, and self-perceived quality
of hearing.

The Argus II is also approved for marketing by the European regulators,
as are the IMS Alpha
([2013](https://www.prnewswire.com/news-releases/retina-implant-ags-alpha-ims-wins-ce-mark-214105601.html))
and [Pixium vision](https://www.pixium-vision.com/)'s IRIS II
([2016](https://www.businesswire.com/news/home/20160724005058/en/Pixium-Vision%C2%A0announces-CE-market-approval-IRIS®II-bionic)).

Other retinal implants include [Bionic Vision
Technologies](https://bionicvis.com/)' Bionic Vision implant which has
been [tested in
humans](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0115239),
and the [Boston Retinal
implant](https://www.bostonretinalimplant.org/our-companies/), whose
developers plan to develop a chip with at least 200 electrodes before
human testing.

###Optic Nerve

Interfaces that directly stimulate the optic nerve broaden the scope of
visual neuroprosthetics to include those with total degeneration of the
retinal neurons. Early stimulation studies of the optic nerve using
'cuff' electrodes evoked visual sensations broadly distributed across
the visual field. There is also evidence that optic nerve fibers respond
better to a 'train of stimuli', suggesting that they are able to
[integrate information over time and
space](https://www.sciencedirect.com/science/article/pii/S0042698903000130).
More recent [pre-clinical
studies](https://actu.epfl.ch/news/optic-nerve-stimulation-to-aid-the-blind/)
on intra-neural stimulation showed that each stimulating electrode
introduced a specific pattern of cortical activation.

However, there are no current optic nerve stimulatory devices in
clinical trials.

###Cortex

The visual cortex has also been a target location for interfaces,
beginning in the 2000s with the controversial [Dobelle
eye](https://www.pittsfordschools.org/site/handlers/filedownload.ashx?moduleinstanceid=680&dataid=5400&FileName=alphaman_pdf.pdf).

The CORTIVIS system, developed at the Universidad Miguel Hernandez de
Elche is a visual cortical BCI currently in [clinical
trials](https://clinicaltrials.gov/ct2/show/NCT02983370). The prosthetic
is composed of a modified 100-electrode Utah array, coupled with custom
software that matches simple visual inputs with retinal outputs, to tune
each electrode independently.

Second Sight's visual cortical prosthesis, 'Orion' is also in clinical
trials. The 60-electrode device is stimulated by processed signals
derived from a camera mounted on a pair of eyeglasses to capture images.
The key to this technology appears to be 'a technique called [dynamic
stimulation](https://www.bcm.edu/news/second-sight-study-brings-sight-to-blind),
where the device stimulates the brain in sweeping patterns across the
array of implanted electrode'.

For now, these cortical implants produce little more than points of
light. Clinical testing appears to be directed at translating images
into patterns that are meaningful to the cortex — an uphill task
considering the complexity and depth of the visual system.

There are more cortical implants in pre-clinical stages, notably a
[1000-electrode
implant](https://www.sciencedirect.com/science/article/pii/S0165027017301322?via%3Dihub)
developed at the Netherlands Institute for Neuroscience, and a
[multi-array approach](http://mypages.iit.edu/~neural/research/icvp/)
with multiple simultaneously implanted 16-electrode arrays under
development at the Illinois Institute of Technology, Chicago.

###Optogenetic Techniques

Optogenetics is also making headway in visual prosthetics, with at least
3 clinical systems in development.

[Bionic Sight](https://www.bionicsightllc.com/)'s technology is based on
an [algorithm that reconstructs
signals](https://agtc.com/wp-content/uploads/2018/07/Optogenetics-Retinal-prosthetic-strategy-to-restore-normal-vision-Nirenberg-PNAS-2012.pdf)
that the retina would generate when exposed to an image or a video and
transmits these directly to the optogenetically modified ganglion cells
whose axons make up the optic nerve. Pre-clinical studies show that
these algorithms are able to encode images in much the same way the
retina does, providing output that the rest of the visual pathway should
be able to interpret. Human safety and feasibility trials started in
2020, with increasing doses of the gene therapy vectors that target
optic nerve cells to make them light-sensitive, so they can subsequently
be stimulated with the 'retinal code'.

Paris-based [Gensight Biologics](https://www.gensight-biologics.com/)
also has a safety/dose clinical trial ongoing to target retinal ganglion
cells with a light-sensitive protein, rendering them photoreceptive.
This method will be coupled with biomimetic googles to capture, amplify,
and present incident light at the appropriate wavelength.

Researchers at the SUNY Downstate Medical Center are developing an
intra-cortical optogenetic therapy system called
[OBServ](https://directorsblog.nih.gov/tag/observe/). The system
consists of consisting of optogenetically modified visual cortex neurons
that act as photoreceptor cells, coupled with two external cameras and
extensive processing of the visual signals.

#Challenges facing Visual prosthetics

Despite the multitude of research groups working on the problem — there
is still a long road ahead with visual prosthetics.

It was 20 years from conception to the first FDA approval of a retinal
implant. A decade later, despite the sizeable number of candidates, no
other visual prosthetic has met this bar. What makes it so hard to
develop a visual interface that works?

First, the approval process is lengthy. The degree of invasiveness of
retinal or cortical implants necessitates extensive pre-clinical and
clinical testing. The Argus II went through lab studies of the implant,
bench testing, preclinical studies of the design, animal testing for
safety, and a 30-subject safety trial before it was approved for
humanitarian use.

Second — somewhat surprising for technology with such life-altering
potential — funding doesn't seem to stretch to clinical trials. Second
Sight's last round of funding in October 2019 was a USD 2.4 M grant
from the NIH, for clinical trials of the Orion. In March 2020, the
company announced layoffs of 80% of its workforce and intent to wind
down in response to the impact of the global COVID-19 pandemic on its
ability to secure financing.

For some implants, the designs that seemed to work in pre-clinical tests
simply do not show the desired results in clinical trials. The
manufacturers of the CE marked Alpha IMS II [discontinued business
activities](https://www.bioregio-stern.de/en/news/retina-implant-ag-discontinues-business-activities)
in 2019, citing the innovation-hostile climate of Europe\'s rigid
regulatory and unsatisfactory results in patients.

Perhaps the biggest challenges facing the field relate to the underlying
neurobiology and our understanding of it. In addition to developing an
interface that is safe to implant and lends itself to chronic
stimulation, scientists are tasked with figuring out and mimicking the
stimulation patterns of a visual system that we have not fully mapped
out.

#Light at the end of the tunnel?

Fortunately, there are a variety of new techniques on the horizon.
Non-electrode stimulation methods such as [photoactive
nanoparticles](https://www.nature.com/articles/s41565-020-0696-3) allow
for safer surgery while allowing more of the retina to be stimulated.
Developers of vision implants are paying more attention to transmitting
[dynamic information via spike
timing](https://www.pixium-vision.com/scientific-publications/), and
technology that claims to have [cracked the retinal
code](https://www.nbcnews.com/mach/video/cracking-the-code-to-treat-blindness-1385480259560)
is finally in human clinical trials. With these developments and the
recent boost in BCI research and funding, there's reason to be
optimistic that bionic vision will become a reality this decade.
