# AI 101 Workshop - Slides Outline

## Design Philosophy

**Audience**: Content creators, non-technical, may feel overwhelmed
**Tone**: Friendly, approachable, empowering (not intimidating)
**Visuals**: Clean, minimal, animations that explain concepts (not just decoration)
**Language**: Simple, relatable analogies, avoid jargon

---

## Slide 1: Welcome & The Driver Analogy

### Goal
Set the tone - this is friendly and practical, not a computer science lecture.

### Key Message
"You don't need to be an engineer to be a good driver, but understanding the basics helps."

### Content
- Workshop title: "AI 101 for Content Creators"
- Subtitle: Understanding AI to use it better
- The car analogy as the opening hook
- Brief intro: "By the end of this workshop, you'll understand how AI thinks so you can work with it more effectively"

### Visuals & Animation
- Clean title with gradient text
- Car icon that transforms into a chat bubble (representing the analogy)
- Fade-in elements sequentially
- Subtle background with abstract shapes

### Speaker Notes
- Introduce yourself briefly
- Acknowledge that AI can feel overwhelming
- Promise: practical understanding, not technical overload

---

## Slide 2: The AI Landscape

### Goal
Orient the audience - what kinds of AI exist and what we're focusing on today.

### Key Message
"AI isn't one thing - it's many tools. Today we're focusing on language AI."

### Content
- **Language AI** (ChatGPT, Claude, Gemini) - Text conversations
- **Image Generators** (Midjourney, DALL-E, Stable Diffusion) - Create images
- **Audio AI** (Voice cloning, music generation)
- **Video AI** (Sora, Runway) - Generate/edit video
- Highlight: "Today's focus → Language AI / LLMs"

### Visuals & Animation
- Grid or horizontal layout showing 4 categories
- Each category has an icon and examples
- Icons animate in one by one
- Language AI section highlights/glows when we announce today's focus
- Maybe: small example outputs for each (chat bubble, image, waveform, video frame)

### Speaker Notes
- Quick overview - don't go deep on each
- "You've probably used some of these already"
- Transition: "Let's demystify the one you probably use most..."

---

## Slide 3: The Simple Truth - What Is an LLM?

### Goal
Demystify LLMs in the simplest possible terms. Remove the mystery.

### Key Message
"An LLM is a sophisticated autocomplete - it predicts what text should come next."

### Content
- **The simple model**: Text goes in → Text comes out
- **What it actually does**: Predicts the most likely next word, over and over
- **Trained on**: Massive amounts of internet text (books, articles, websites, code)
- **What it is NOT**:
  - ❌ Not a search engine (doesn't look things up)
  - ❌ Not a database (doesn't store facts)
  - ❌ Not conscious or thinking

### Visuals & Animation
1. **Phase 1**: Show a simple box with "Your message" going in, "Response" coming out
2. **Phase 2**: Zoom into the box, reveal it's doing "autocomplete" - show words appearing one by one
3. **Phase 3**: Show the "NOT" list with X marks animating in

### Analogy
"It's like the autocomplete on your phone, but trained on basically the entire internet - so it's really, really good at predicting what should come next."

### Speaker Notes
- This is the foundation - make sure they get this
- "Once you understand this, everything else makes sense"
- The autocomplete analogy is powerful - let it land

---

## Slide 4: How AI Reads Your Message (Tokens)

### Goal
Explain tokens just enough to understand pricing and limits - nothing more.

### Key Message
"AI breaks your text into small pieces called tokens. This affects pricing and what you can fit in a conversation."

### Content
- AI doesn't read letters or words - it reads **tokens**
- Tokens are usually: words, parts of words, or punctuation
- **Why you care**:
  - 💰 **Pricing**: You pay per token (input + output)
  - 📏 **Limits**: There's a maximum tokens per conversation
- **Rule of thumb**: ~4 characters = 1 token, or ~¾ of a word

### Visuals & Animation
1. Show a sentence: "Hello, how can I help you today?"
2. Animate it breaking apart into colored token chunks: [Hello] [,] [ how] [ can] [ I] [ help] [ you] [ today] [?]
3. Show a counter: "9 tokens"
4. Below: simple icons for pricing (coin) and limits (ruler/measuring tape)

### What NOT to include
- No tokenizer technical details
- No BPE or WordPiece explanations
- No vocabulary sizes

### Speaker Notes
- "You don't need to count tokens - just know they exist"
- "This is why some AI tools charge by usage"
- "And why very long documents might get cut off"

---

## Slide 5: The Generation Game (How Responses Are Created)

### Goal
Explain autoregressive generation and probability in a way that demystifies "why AI acts this way."

### Key Message
"AI writes one word at a time by picking the most likely next word - which explains a lot about its behavior."

### Content
**Part 1: One Word at a Time**
- AI doesn't write the whole response at once
- It picks one word, then the next, then the next...
- Each word is based on everything that came before

**Part 2: The Probability Game**
- For each word, AI considers many options
- Each option has a probability (likelihood)
- Usually picks a high-probability word, but not always the highest
- This is why: same question → different answers

**Part 3: Why It Makes Things Up (Hallucinations)**
- AI picks "likely" words, not "true" words
- It sounds confident because confident-sounding text was in its training
- It's not lying - it's just predicting plausible text

### Visuals & Animation
1. **Word-by-word animation**: Show a prompt, then words appearing one at a time with a typing effect
   - "The capital of France is" → "Paris" appears

2. **Probability visualization**:
   - Show a simple bar chart of word options: "Paris (85%)", "the (8%)", "located (4%)", "a (3%)"
   - Highlight that it usually picks high probability but has some randomness

3. **Hallucination example**:
   - Prompt: "Tell me about the 2024 SuperMegaCon in Austin"
   - Response starts generating plausible-sounding but fake details
   - Small warning icon: "This event doesn't exist - but the text sounds plausible!"

### Speaker Notes
- "This is why you might ask the same question twice and get different answers"
- "And why AI can confidently tell you something that's completely made up"
- "It's not trying to deceive you - it's just really good at generating plausible text"

---

## Slide 6: The Memory Problem (Context Window)

### Goal
Explain context windows in practical terms - why AI "forgets" and how to work with it.

### Key Message
"AI can only 'see' a limited amount of text at once - like having a conversation through a small window."

### Content
**The Concept**:
- Every AI has a "context window" - maximum text it can process
- This includes: your message + the AI's response + conversation history
- When you exceed it: older parts get "forgotten"

**Practical Implications**:
- Long conversations go off track (it forgets the beginning)
- Can't paste an entire book and ask questions
- Why you sometimes need to "remind" AI of earlier context

**Tips**:
- Put the most important information early
- Summarize long conversations if they drift
- Start fresh conversations for new topics

**Context Window Sizes** (approximate):
- ChatGPT-4: ~128,000 tokens (a novel)
- Claude: ~200,000 tokens (multiple novels)
- Older models: ~4,000-8,000 tokens (a few pages)

### Visuals & Animation
1. **Window metaphor**: Show a literal window frame, with text scrolling through it
   - Old text exits the top, new text enters the bottom
   - Text outside the window is "forgotten" (grayed out)

2. **Progress bar**: Show a context window filling up as conversation continues
   - Green → Yellow → Red as it fills

3. **Comparison**: Simple size comparison of different AI context windows

### Speaker Notes
- "This is why your AI might 'forget' what you talked about earlier"
- "Newer models have bigger windows, but there's always a limit"
- "Good news: context windows keep getting bigger"

---

## Slide 7: The Art of Prompting

### Goal
Practical prompting techniques they can use immediately.

### Key Message
"How you talk to AI matters. Small changes in your prompt can dramatically change the quality of results."

### Content

**1. Be Specific, Not Vague**
- ❌ "Write about dogs"
- ✅ "Write a 200-word blog intro about why golden retrievers make great family pets, targeting first-time dog owners"

**2. Give Context**
- Tell AI who you are, what you're working on, who your audience is
- "I'm a food blogger writing for busy parents..."

**3. Provide Examples**
- "Write in a style similar to this: [example]"
- "Here's my brand voice: [sample]"

**4. Use the Role Technique**
- "Act as a professional copywriter with 10 years of experience..."
- "You are a friendly social media manager..."

**5. Iterate - Have a Conversation**
- Don't expect perfection on the first try
- "Make it shorter" / "More casual" / "Add more examples"
- Build on what works

**Common Mistakes**:
- Being too vague
- Not providing enough context
- Giving up after one try
- Asking multiple unrelated things at once

### Visuals & Animation
- Split screen: Bad prompt (red/dim) vs. Good prompt (green/bright)
- Animated transformation: vague prompt morphs into specific prompt
- Checklist that checks off as we go through each technique
- Before/after response quality comparison

### Speaker Notes
- "This is probably what you came for - practical tips"
- Share a personal example of prompt iteration
- "Let's do a quick demo..." (if time allows)

---

## Slide 8: Real Use Cases for Creators

### Goal
Concrete, practical applications they can start using today.

### Key Message
"AI excels at specific tasks - here's where it can actually help your creative workflow."

### Content

**Great For:**

🧠 **Brainstorming & Ideation**
- "Give me 10 content ideas about [topic]"
- Breaking through creative blocks
- Exploring angles you hadn't considered

📝 **Drafting & Outlining**
- First drafts to edit and refine
- Blog post structures
- Video scripts and outlines

🔍 **Research & Summarizing**
- "Summarize this article in 3 bullet points"
- Explaining complex topics simply
- Gathering background information

✏️ **Editing & Refining**
- "Make this more concise"
- "Rewrite for a younger audience"
- Grammar and clarity checks

🔄 **Repurposing Content**
- Turn a blog post into social media threads
- Convert a podcast transcript into an article
- Create variations for different platforms

**NOT Great For (Keep Human):**

⚠️ **Final creative decisions** - Your taste matters
⚠️ **Personal stories** - Only you have your experiences
⚠️ **Expert opinions in your field** - Your expertise is the value
⚠️ **Anything requiring current events** - AI knowledge has cutoff dates
⚠️ **Fact-heavy content** - Always verify important facts

### Visuals & Animation
- Two-column layout: "Great For" | "Keep Human"
- Icons for each use case
- Animate in section by section
- Maybe: small example prompts that appear on hover/click

### Speaker Notes
- Give real examples from your own workflow
- "I use it for X, but never for Y"
- Encourage experimentation

---

## Slide 9: Key Takeaways - AI as Your Creative Partner

### Goal
Reinforce the main messages and send them off empowered.

### Key Message
"AI is a powerful assistant that amplifies your creativity - but you're still the creative director."

### Content

**The Big Ideas:**

1. **AI is sophisticated autocomplete** - It predicts text, not truth

2. **How you prompt matters** - Be specific, give context, iterate

3. **Know the limits** - Context windows, hallucinations, knowledge cutoffs

4. **Use it for the right tasks** - Brainstorming, drafting, editing, repurposing

5. **Keep your voice** - AI assists, you decide

**The Mindset Shift:**
- From: "Will AI replace me?"
- To: "How can AI help me do more of what I'm great at?"

**Your Creative Judgment Is Irreplaceable**
- AI can generate options - you choose what's right
- AI can write drafts - you add the soul
- AI can research - you have the expertise

**Q&A Time** - Bring your questions!

### Visuals & Animation
- Clean summary with icons for each takeaway
- Final statement highlighted/emphasized
- Animated transition from "fear" mindset to "partnership" mindset
- End with welcoming Q&A visual

### Speaker Notes
- Quick recap - reinforce the key points
- End on an empowering note
- "You now understand AI better than most people"
- Open for Q&A

---

## Animation Style Guide

### General Principles
- **Purposeful**: Every animation should explain or emphasize, not just decorate
- **Smooth**: Use ease-in-out transitions, avoid jarring movements
- **Sequential**: Reveal information progressively to guide attention
- **Subtle**: Don't distract from the content

### Framer Motion Techniques to Use
- `staggerChildren`: Reveal list items one by one
- `variants`: Define animation states for consistency
- `whileInView`: Trigger animations when elements scroll into view
- `AnimatePresence`: Smooth transitions between content states

### Color Palette (from current theme)
- Primary actions/highlights: Gradient (cyan to purple)
- Positive/good examples: Green tones
- Negative/bad examples: Red/dim tones
- Neutral information: White/gray text

### Typography
- Headings: Large, bold, easy to read from back of room
- Body: Clear, adequate spacing
- Code/examples: Monospace font
- Keep text minimal - visuals do the heavy lifting

---

## Technical Notes

### Interactive Elements to Consider
- **Slide 4 (Tokens)**: Maybe a simple input where they can type and see tokens? (stretch goal)
- **Slide 5 (Probability)**: Animated probability bars
- **Slide 7 (Prompting)**: Before/after toggle or comparison

### Responsive Considerations
- Primarily designed for presentation (large screen)
- Progress bar / navigation at bottom
- Keyboard navigation (arrows, F for fullscreen)

---

## Implementation Order

1. ~~Title Slide~~ (exists, needs update)
2. AI Landscape (new)
3. Simple Truth (exists as BigPicture, needs update)
4. Tokens (exists, simplify significantly)
5. Generation Game (combine Autoregressive + Probability)
6. Memory Problem (exists as ContextWindow, update framing)
7. Art of Prompting (new)
8. Real Use Cases (new)
9. Key Takeaways (exists, major update)

**Delete**: TokenizerDemo, AttentionSlide (too technical)
