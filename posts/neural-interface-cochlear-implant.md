---
title: 'How to Build a Neural Interface: Lessons from Cochlear Implants'
tags: ["stimulation", "deepdive" ]
published: true
featuredImage: ./sven-read-CfuY5XMJHsA-unsplash.jpg
date: '2020-08-08'
---


*The cochlear implant is a miracle that deserves a place in the history of brain-computer communications, as the first neural interface to restore a human sense through electrical stimulation of neurons*

![](../src/images/michael-jasmund-M3NP6dyt9KA-unsplash.jpg)
<small class="caption">Photo by <a href="https://unsplash.com/@jasmund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Michael Jasmund</a></small>

How many people have an invasive neural interface implanted right now?

[Hundreds of
thousands](https://www.nidcd.nih.gov/health/cochlear-implants). Close to
a million people with hearing loss today probably have a cochlear
implant to help them hear.




Cochlear implants are the most successful neural interface to date by a
wide margin. Since the US FDA cleared the first cochlear implant for
adult use in the mid-1980s, these devices have steadily become more and
more sophisticated. At a time when no fewer than [50
ventures](https://medium.com/neurotech-davis/neural-interface-market-2020-a-guide-for-entrepreneurs-and-investors-4dcd4ec9a4d0)
are building versions of brain-computer interfaces (BCIs) --- both
invasive and non-invasive --- it's worth taking lessons from the neural
interface that was far ahead of its time.

This post is not about the impact of cochlear implants on people's
lives, whether they are always
[desirable](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6913847/) for
those who are eligible for them, or the
[difficulties](https://www.npr.org/templates/story/story.php?storyId=4737586)
of adapting to these little devices that stimulate your auditory nerves.
There is probably also a debate to be had about when cochlear implants
cross the line from replacement into augmentation. The day when
recipients of cochlear implants may have better hearing abilities than
the un-implanted may not be too far in the future.

This post is about how this first and most successful of neural
interfaces was developed. Why has it been so hard to replicate this
success for other senses, or brain cortical stimulation? Are there any
pieces of this success story that we can replicate for invasive BCI
development?

What is a cochlear implant?
---------------------------

A cochlear implant bypasses damage or lack of development of the middle
or inner ear to directly stimulate auditory nerves and restore hearing.
They are so well-known today, that we don't even think of them as
invasive neural interfaces. ***Cochlear implants are surgically
implanted electrodes that augment a sensory function by directly
stimulating neurons.*** They have an external speech processor that
hears sounds and converts them to electric signals. These signals are
transmitted to the cochlea to stimulate auditory nerve fibers, bypassing
the sensory portions of the ear.

The neuroscientists who developed these implants decades ago managed to
mimic the tonotopic organization of receptor cells in the cochlea to
build a multi-electrode implant where the spatial placement of these
electrodes encodes frequency. More on this further down. Thirty-five
years later, we are still far from demonstrating this level of
sophistication for neuronal stimulation of other sensory or cortical
areas, even experimentally.

Cochlear implants are not generally considered Brain-Computer
interfaces. While the speech processor onboard the implant can be
considered a 'computer', current cochlear implants do not record
neuronal activity. They stimulate fibers of the auditory nerve, which is
a specialized nerve located within the skull but is not part of the
brain.

These interfaces are still a brilliant demonstration of how BCI
technology progresses bit by bit, built on a series of advances in our
understanding of human biology and how to couple it with electronics.
It's also a testament to the audacity that allowed its developers to
imagine that you could pass electrical impulses to a human ear and
enable lost hearing.

What is special about the auditory neural interface?
----------------------------------------------------

A cochlear implant is a long electrode threaded into the bony spiral
called '[cochlea'](https://en.wikipedia.org/wiki/Cochlea) in the inner
ear. The mammalian cochlea is named after snail for its shape. The
cochlea contains a natural neural interface where 'hair cells' transform
mechanical sound vibrations into electrical impulses that are passed to
auditory neurons. This interface is organized tonotopically --- each
location along the spiral is preferentially activated by a specific
frequency range. The cochlea effectively decomposes sound waves into
their component frequencies -- acting as a [biological Fourier
transform](https://commons.wikimedia.org/wiki/File:1408_Frequency_Coding_in_The_Cochlea.jpg)!
This relationship between pitch or frequency and location in the cochlea
is elegantly described on the cochlear implant manufacturer [MED-EL's
blog](https://blog.medel.pro/natural-tonotopic-coding/).

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/1408_Frequency_Coding_in_The_Cochlea.jpg/512px-1408_Frequency_Coding_in_The_Cochlea.jpg)](https://commons.wikimedia.org/wiki/File:1408_Frequency_Coding_in_The_Cochlea.jpg)
<small class="caption">Frequency coding in the cochlea</small>

The multielectrode cochlear implant mimics both characteristics of the
biological interface. It not only transforms sound waves to electrical
signals but also breaks them down spectrally in a way that approximates
the natural biology. Current cochlear implants have 12 to 22 electrodes
that cover the normal range of speech sounds. They do not provide a
fully normal hearing experience, but the brain makes up for some of the
lack of resolution and distorted input. In the months to years after
receiving an implant the recipient's ability to interpret speech
typically improves through [brain
plasticity](https://www.hindawi.com/journals/np/2013/318521/).

Of course, the neurobiology of hearing goes far beyond a single
spatially organized interface. For example, the sensitivity of the
cochlea is modulated dynamically by descending nerve fibers from the
[brain stem](https://en.wikipedia.org/wiki/Olivocochlear_system). This
protects the system against loud sounds and helps relevant sounds in a
noisy environment. At an even higher level, the brain uses the
listener's intent (attention) to determine which speaker's voice is more
important and adjusts the processing accordingly. 

And synthetic implants are not far behind. In 2020, cochlear implants
are starting to become 'hearables'. [One
manufacturer](https://blog.medel.pro/samba2/) advertises an implant with
an audio processor that can detect when you're driving and activate the
speech tracking feature to selectively listen to passengers behind you.
It even has an attachment that streams music directly to the implant via
Bluetooth. As their capabilities grow, cochlear implants will likely
mimic more functions of the inner ear and auditory nerves and auditory
cortex, while packing more computing power into their processors. They
will eventually evolve from neuro-prosthetics to full BCIs -- and not at
a snail's pace.

How are cochlear implants so far ahead of other neural interfaces?
------------------------------------------------------------------

Work on cochlear implants started with single electrode stimulators in
the 1960s, evolving to their current multielectrode form by the late
[1970s](https://en.wikipedia.org/wiki/Cochlear_implant#History). Since
then, they have continued to improve every year through the addition of
transcutaneous communication, miniaturization of components, and
importantly, advances in speech processing algorithms.

There are at least 5 current commercial manufacturers of cochlear
implants.
[Three](https://www.ncbi.nlm.nih.gov/books/NBK285772/table/results.t1/)
of these are approved by FDA for use in the US. Cochlear implants are
covered by health insurance and by many nationalized healthcare systems
for eligible individuals.

***What has allowed us to make so much headway with these particular
devices?***

The interface between the sensory cells and the nerves is surgically
accessible -- but no more so than touch receptors and sensory nerves, or
the retina and the optic nerve. The cochlea is unique because the
spatial representation of tones or frequencies is also represented at
the same interface. This allowed scientists to understand how it works
and to create a synthetic version that coarsely mimics it.

The visual system and other senses also have a similar spatial
organization to encode different types of stimuli. However, for the
visual system, this spatial organization happens higher up (or further
inside) the brain, rather than at the same accessible surface as the
sensory receptors. Since we cannot fully access or even understand this
representation, the development of an efficient visual interface has
been more difficult.

Much of the recent firepower in the BCI area has been directed towards
[recording](https://www.biorxiv.org/content/10.1101/703801v2) rather
stimulating neurons. Even so, there is much to learn from the story of
cochlear implants.

Whether its [ethical
questions](https://academic.oup.com/jdsde/article/11/1/102/410842) about
why we should or should not use an implant, techniques to encourage
[neurons to grow around with the
electrodes](https://www.medicalnewstoday.com/articles/275923), or just
the marvel of biology as an inspiration --- cochlear implants may have
some answers.
